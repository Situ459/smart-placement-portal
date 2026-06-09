package com.placement.smartplacementportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.smartplacementportal.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

    long countByRecruiterId(Long recruiterId);

    List<Job> findByRecruiterId(Long recruiterId);
}