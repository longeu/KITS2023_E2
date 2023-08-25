package com.kits_internship.edu_flatform.model.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.kits_internship.edu_flatform.entity.StatusName;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
public class PaymentResponse {
    private Long id;
    private String name;
    private String image;
    private StatusName status;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date createdDate;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date modifiedDate;
}
