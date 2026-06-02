package com.placement.smartplacementportal.service;

import com.placement.smartplacementportal.entity.Application;
import com.placement.smartplacementportal.entity.Job;
import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.repository.ApplicationRepository;
import com.placement.smartplacementportal.repository.JobRepository;
import com.placement.smartplacementportal.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JobRepository jobRepository;

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }

    public Application saveApplication(Application application) {
        return applicationRepository.save(application);
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }

    public List<Application> getApplicationsByStudent(Long studentId) {

        Student student = studentRepository
                .findById(studentId)
                .orElse(null);

        if (student == null) {
            return List.of();
        }

        return applicationRepository.findByStudent(student);
    }

    public List<Application> getApplicationsByJob(Long jobId) {

        Job job = jobRepository
                .findById(jobId)
                .orElse(null);

        if (job == null) {
            return List.of();
        }

        return applicationRepository.findByJob(job);
    }
    
    public Application updateApplicationStatus(
            Long applicationId,
            String status) {

        Application application =
                applicationRepository
                        .findById(applicationId)
                        .orElse(null);

        if (application == null) {
            return null;
        }

        application.setStatus(
                com.placement.smartplacementportal.entity.ApplicationStatus
                        .valueOf(status));

        return applicationRepository.save(application);
    }
}