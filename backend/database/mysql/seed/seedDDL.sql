CREATE TABLE Groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    group_key VARCHAR(64) UNIQUE NOT NULL
    group_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (group_id)
);

CREATE TABLE Users (
    group_id INT NOT NULL,
    user_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    role ENUM('member','admin') NOT NULL DEFAULT 'member',
    phone_number VARCHAR(20),
    PRIMARY KEY (user_id),
    FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE
);

CREATE TABLE Tasks(
    group_id INT NOT NULL,
    task_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    recurrence_interval_days INT,
    CHECK (recurrence_interval_days IS NULL OR recurrence_interval_days > 0),
    type ENUM('checkbox','timer') NOT NULL,
    doNotification BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (task_id),
    FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE
);

CREATE TABLE task_notification_users (
    task_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (task_id, user_id),
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);