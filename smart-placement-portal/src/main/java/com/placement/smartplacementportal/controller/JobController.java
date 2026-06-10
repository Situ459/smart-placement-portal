package com.placement.smartplacementportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.placement.smartplacementportal.entity.Job;
import com.placement.smartplacementportal.service.JobService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/jobs")
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/jobs/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    @GetMapping("/jobs/recruiter/{recruiterId}")
    public List<Job> getJobsByRecruiter(
            @PathVariable Long recruiterId) {

        return jobService.getJobsByRecruiter(recruiterId);
    }

    @PostMapping("/jobs")
    public Job saveJob(@RequestBody Job job) {
        return jobService.saveJob(job);
    }
    
    @PutMapping("/jobs/{id}")
    public Job updateJob(
            @PathVariable Long id,
            @RequestBody Job updatedJob) {

        return jobService.updateJob(id, updatedJob);
    }

    @PutMapping("/jobs/{id}/close")
    public Job closeJob(
            @PathVariable Long id) {

        return jobService.closeJob(id);
    }

    @DeleteMapping("/jobs/{id}")
    public String deleteJob(@PathVariable Long id) {

        jobService.deleteJob(id);

        return "Job deleted successfully";
    }
}