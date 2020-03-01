const os = require("os")
const utils = require('../../utils');

module.exports = ({name, entityIdType}) =>
`<?xml version="1.1" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog" xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.6.xsd">

    <changeSet author="${os.userInfo().username}" id="${utils.getFormattedDate()}">
        <createTable tableName="${utils.toSnakeCase(name)}s">
            <column name="id" type="${entityIdType}">
                <constraints primaryKey="true" primaryKeyName="pk_${utils.toSnakeCase(name)}" nullable="false" unique="true"/>
            </column>
            <!-- TODO: Add colums -->
        </createTable>
    </changeSet>
</databaseChangeLog>
`;
