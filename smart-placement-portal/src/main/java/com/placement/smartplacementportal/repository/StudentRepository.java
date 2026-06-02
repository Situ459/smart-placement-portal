package com.placement.smartplacementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.smartplacementportal.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}