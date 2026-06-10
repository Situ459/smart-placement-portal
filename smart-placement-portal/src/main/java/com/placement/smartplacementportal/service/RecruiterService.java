package com.placement.smartplacementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.smartplacementportal.dto.RecruiterRegistrationRequest;
import com.placement.smartplacementportal.entity.Recruiter;
import com.placement.smartplacementportal.entity.Role;
import com.placement.smartplacementportal.entity.User;
import com.placement.smartplacementportal.repository.RecruiterRepository;
import com.placement.smartplacementportal.repository.UserRepository;

@Service
public class RecruiterService {

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Recruiter> getAllRecruiters() {
        return recruiterRepository.findAll();
    }

    public Recruiter saveRecruiter(Recruiter recruiter) {
        return recruiterRepository.save(recruiter);
    }

    public Recruiter getRecruiterById(Long id) {
        return recruiterRepository.findById(id).orElse(null);
    }

    public void deleteRecruiter(Long id) {
        recruiterRepository.deleteById(id);
    }

    public Recruiter registerRecruiter(
            RecruiterRegistrationRequest request) {

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole(Role.RECRUITER);
        user.setIsActive(true);

        User savedUser = userRepository.save(user);

        Recruiter recruiter = new Recruiter();

        recruiter.setUser(savedUser);
        recruiter.setCompanyName(
                request.getCompanyName());
        recruiter.setDesignation(
                request.getDesignation());
        recruiter.setPhone(
                request.getPhone());

        return recruiterRepository.save(recruiter);
    }
}