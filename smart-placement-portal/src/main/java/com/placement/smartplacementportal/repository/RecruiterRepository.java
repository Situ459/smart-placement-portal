package com.placement.smartplacementportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.smartplacementportal.entity.Recruiter;
import com.placement.smartplacementportal.entity.User;

public interface RecruiterRepository
        extends JpaRepository<Recruiter, Long> {

    Optional<Recruiter> findByUser(User user);

}