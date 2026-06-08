package com.placement.smartplacementportal.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.smartplacementportal.repository.ApplicationRepository;
import com.placement.smartplacementportal.repository.JobRepository;
import com.placement.smartplacementportal.repository.RecruiterRepository;
import com.placement.smartplacementportal.repository.ResumeRepository;
import com.placement.smartplacementportal.repository.StudentRepository;
import com.placement.smartplacementportal.repository.UserRepository;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private ResumeRepository resumeRepository;

    public Map<String, Long> getAdminDashboard() {

        Map<String, Long> dashboard = new HashMap<>();

        dashboard.put("totalUsers", userRepository.count());
        dashboard.put("totalStudents", studentRepository.count());
        dashboard.put("totalRecruiters", recruiterRepository.count());
        dashboard.put("totalJobs", jobRepository.count());
        dashboard.put("totalApplications", applicationRepository.count());
        dashboard.put("totalResumes", resumeRepository.count());

        return dashboard;
    }
}