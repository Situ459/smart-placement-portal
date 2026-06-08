package com.placement.smartplacementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.smartplacementportal.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {
	
	long countByRecruiterId(Long recruiterId);

}