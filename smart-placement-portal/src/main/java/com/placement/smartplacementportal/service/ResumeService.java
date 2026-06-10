package com.placement.smartplacementportal.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.placement.smartplacementportal.entity.Resume;
import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.repository.ResumeRepository;
import com.placement.smartplacementportal.repository.StudentRepository;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume getResumeById(Long id) {
        return resumeRepository.findById(id).orElse(null);
    }

    public Resume saveResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    public void deleteResume(Long id) {
        resumeRepository.deleteById(id);
    }

    public List<Resume> getResumesByStudent(Long studentId) {

        Student student = studentRepository
                .findById(studentId)
                .orElse(null);

        if (student == null) {
            return List.of();
        }

        return resumeRepository.findByStudent(student);
    }

    public Resume uploadResume(
            Long studentId,
            MultipartFile file)
            throws IOException {

        Student student = studentRepository
                .findById(studentId)
                .orElse(null);

        if (student == null) {
            return null;
        }

        String fileName =
                System.currentTimeMillis()
                        + "_"
                        + file.getOriginalFilename();

        File directory =
                new File(uploadDir);

        if (!directory.exists()) {
            directory.mkdirs();
        }

        System.out.println(
                "Upload Directory = "
                        + directory.getAbsolutePath());

        File destination =
                new File(directory, fileName);

        file.transferTo(destination);

        Resume resume = new Resume();

        resume.setStudent(student);
        resume.setFileName(fileName);
        resume.setFilePath(
                destination.getAbsolutePath());

        resume.setUploadedAt(
                LocalDateTime.now());

        return resumeRepository.save(resume);
    }
}