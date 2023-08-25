package com.kits_internship.edu_flatform.repository;

import com.kits_internship.edu_flatform.entity.CategoryEntity;
import com.kits_internship.edu_flatform.entity.StatusName;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends BaseRepository<CategoryEntity, Long> {
    @Query(value = "select c from CategoryEntity c " +
            " where " +
            "   (coalesce(:keyword) is null or :keyword = '' or" +
            "   lower(c.name) like concat('%', concat(lower(:keyword), '%')))" +
            " and (coalesce(:status,null) is null or c.status in :status ) "
    )
    Page<CategoryEntity> filter(
            @Param("keyword") String keyword,
            @Param("status") StatusName status,
            Pageable pageable
    );

}
