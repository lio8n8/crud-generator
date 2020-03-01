const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName}.${filenames.iRepository.subdir};

import ${packageName}.${filenames.model.subdir}.${filenames.model.name};
import org.springframework.data.jpa.repository.JpaRepository;

public interface ${className} extends JpaRepository<${entityName}, ${entityIdType}> {

}\n`;
