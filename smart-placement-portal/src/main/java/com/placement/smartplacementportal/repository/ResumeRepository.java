package com.placement.smartplacementportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.smartplacementportal.entity.Resume;
import com.placement.smartplacementportal.entity.Student;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

    List<Resume> findByStudent(Student student);
    
    long countByStudentId(Long studentId);

}