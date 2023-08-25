package com.kits_internship.edu_flatform.model.request;

import com.kits_internship.edu_flatform.entity.StatusName;
import com.kits_internship.edu_flatform.model.base.BasePagingQueryRequest;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Getter
@Setter
public class CourseFilterRequest extends BasePagingQueryRequest {
    private Long categoryID;
    private StatusName status;
    private Boolean registed;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date fromDate;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date toDate;
}