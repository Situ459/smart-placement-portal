package com.placement.smartplacementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.smartplacementportal.entity.Job;
import com.placement.smartplacementportal.entity.JobStatus;
import com.placement.smartplacementportal.repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    public List<Job> getJobsByRecruiter(Long recruiterId) {
        return jobRepository.findByRecruiterId(recruiterId);
    }

    public Job closeJob(Long id) {

        Job job =
                jobRepository.findById(id)
                        .orElse(null);

        if (job == null) {
            return null;
        }

        job.setStatus(JobStatus.CLOSED);

        return jobRepository.save(job);
    }
    
    public Job updateJob(
            Long id,
            Job updatedJob) {

        Job existingJob =
                jobRepository.findById(id)
                        .orElse(null);

        if (existingJob == null) {
            return null;
        }

        existingJob.setTitle(
                updatedJob.getTitle());

        existingJob.setLocation(
                updatedJob.getLocation());

        existingJob.setSalaryPackage(
                updatedJob.getSalaryPackage());

        existingJob.setRequiredSkills(
                updatedJob.getRequiredSkills());

        existingJob.setDescription(
                updatedJob.getDescription());

        existingJob.setMinimumCgpa(
                updatedJob.getMinimumCgpa());

        existingJob.setDeadline(
                updatedJob.getDeadline());

        return jobRepository.save(existingJob);
    }
}