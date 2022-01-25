package cl.marco.employees.backend.exceptions;

import java.sql.Date;

public class ErrorDetail {
    private Date timestamp;
    private String message;
    private String details;

    public ErrorDetail(java.util.Date date, String message, String details) {
        super();

        this.timestamp = date;
        this.message = message;
        this.details = details;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getDetails() {
        return details;
    }

    public String getMessage() {
        return message;
    }
}
