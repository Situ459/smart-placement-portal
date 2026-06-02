package com.placement.smartplacementportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.placement.smartplacementportal.entity.Recruiter;
import com.placement.smartplacementportal.service.RecruiterService;

@RestController
public class RecruiterController {

    @Autowired
    private RecruiterService recruiterService;

    @GetMapping("/recruiters")
    public List<Recruiter> getAllRecruiters() {
        return recruiterService.getAllRecruiters();
    }

    @PostMapping("/recruiters")
    public Recruiter saveRecruiter(@RequestBody Recruiter recruiter) {
        return recruiterService.saveRecruiter(recruiter);
    }

    @GetMapping("/recruiters/{id}")
    public Recruiter getRecruiterById(@PathVariable Long id) {
        return recruiterService.getRecruiterById(id);
    }

    @DeleteMapping("/recruiters/{id}")
    public String deleteRecruiter(@PathVariable Long id) {
        recruiterService.deleteRecruiter(id);
        return "Recruiter deleted successfully";
    }
}