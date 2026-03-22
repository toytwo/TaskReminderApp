CREATE PROCEDURE UpdateGroups(
    IN p_group_name VARCHAR(255),
    IN p_group_key VARCHAR(255)
)
BEGIN
    INSERT INTO user_groups(group_name, group_key)
    VALUES(p_group_name, p_group_key);
END ;