package com.placement.smartplacementportal.repository;

import com.placement.smartplacementportal.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.entity.Job;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
	List<Application> findByStudent(Student student);
	
	List<Application> findByJob(Job job);
}