package com.placement.smartplacementportal.controller;

import com.placement.smartplacementportal.entity.Application;
import com.placement.smartplacementportal.service.ApplicationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    public Application getApplicationById(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }

    @PostMapping
    public Application createApplication(@RequestBody Application application) {
        return applicationService.saveApplication(application);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }

    @GetMapping("/student/{studentId}")
    public List<Application> getApplicationsByStudent(
            @PathVariable Long studentId) {

        return applicationService
                .getApplicationsByStudent(studentId);
    }

    @GetMapping("/job/{jobId}")
    public List<Application> getApplicationsByJob(
            @PathVariable Long jobId) {

        return applicationService
                .getApplicationsByJob(jobId);
    }
    
    @PutMapping("/{id}/status")
    public Application updateApplicationStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return applicationService
                .updateApplicationStatus(id, status);
    }
}