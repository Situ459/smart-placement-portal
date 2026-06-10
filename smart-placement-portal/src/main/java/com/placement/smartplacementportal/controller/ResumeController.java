package com.placement.smartplacementportal.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import com.placement.smartplacementportal.entity.Resume;
import com.placement.smartplacementportal.service.ResumeService;

@RestController
@RequestMapping("/resumes")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @GetMapping
    public List<Resume> getAllResumes() {
        return resumeService.getAllResumes();
    }

    @GetMapping("/{id}")
    public Resume getResumeById(@PathVariable Long id) {
        return resumeService.getResumeById(id);
    }

    @PostMapping
    public Resume createResume(@RequestBody Resume resume) {
        return resumeService.saveResume(resume);
    }

    @PostMapping("/upload")
    public Resume uploadResume(
            @RequestParam("studentId") Long studentId,
            @RequestParam("file") MultipartFile file)
            throws IOException {

        return resumeService.uploadResume(
                studentId,
                file);
    }

    @DeleteMapping("/{id}")
    public void deleteResume(@PathVariable Long id) {
        resumeService.deleteResume(id);
    }

    @GetMapping("/student/{studentId}")
    public List<Resume> getResumesByStudent(
            @PathVariable Long studentId) {

        return resumeService.getResumesByStudent(studentId);
    }
}