const entity = require('../../input/entity');

module.exports = (name, basePackage, entityName, entityIdType) =>
`package ${basePackage};

import ${basePackage}.${name}s.models.${entityName};
import org.springframework.data.jpa.repository.JpaRepository;

public interface I${entityName}Repository extends JpaRepository<${entityName}, ${entityIdType}> {

}\n`;
