package com.placement.smartplacementportal.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.placement.smartplacementportal.dto.LoginRequest;
import com.placement.smartplacementportal.dto.LoginResponse;
import com.placement.smartplacementportal.entity.User;
import com.placement.smartplacementportal.jwt.JwtUtil;
import com.placement.smartplacementportal.repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        Optional<User> userOptional =
                userRepository.findByEmail(request.getEmail());

        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOptional.get();

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token =
                jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getRole().name(),
                user.getEmail());
    }
}