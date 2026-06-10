package com.placement.smartplacementportal.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.placement.smartplacementportal.dto.LoginRequest;
import com.placement.smartplacementportal.dto.LoginResponse;
import com.placement.smartplacementportal.entity.Recruiter;
import com.placement.smartplacementportal.entity.Role;
import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.entity.User;
import com.placement.smartplacementportal.jwt.JwtUtil;
import com.placement.smartplacementportal.repository.RecruiterRepository;
import com.placement.smartplacementportal.repository.StudentRepository;
import com.placement.smartplacementportal.repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        Optional<User> userOptional =
                userRepository.findByEmail(
                        request.getEmail());

        if (userOptional.isEmpty()) {
            throw new RuntimeException(
                    "User not found");
        }

        User user = userOptional.get();

        if (!user.getPassword()
                .equals(request.getPassword())) {

            throw new RuntimeException(
                    "Invalid password");
        }

        String token =
                jwtUtil.generateToken(
                        user.getEmail());

        Long userId = user.getId();
        Long studentId = null;
        Long recruiterId = null;

        if (user.getRole() == Role.STUDENT) {

            Student student =
                    studentRepository
                            .findByUser(user)
                            .orElse(null);

            if (student != null) {
                studentId = student.getId();
            }
        }

        if (user.getRole() == Role.RECRUITER) {

            Recruiter recruiter =
                    recruiterRepository
                            .findByUser(user)
                            .orElse(null);

            if (recruiter != null) {
                recruiterId =
                        recruiter.getId();
            }
        }

        return new LoginResponse(
                token,
                user.getRole().name(),
                user.getEmail(),
                userId,
                studentId,
                recruiterId);
    }
}