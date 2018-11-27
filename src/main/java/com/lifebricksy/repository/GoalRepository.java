package com.lifebricksy.repository;

import com.lifebricksy.domain.Goal;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


@Repository
public interface GoalRepository extends JpaRepository<Goal , Long> {


}
