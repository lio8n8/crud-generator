module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName};

import ${packageName}.${entityName};
import org.springframework.data.jpa.repository.JpaRepository;

public interface ${className} extends JpaRepository<${entityName}, ${entityIdType}> {

}\n`;
