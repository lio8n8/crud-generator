const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) => {
    let descriptiveName = utils.convertToPhrase(name);

return `package ${packageName}.${filenames.iController.subdir};

import ${packageName}.${filenames.dto.subdir}.${filenames.dto.name};
import ${packageName}.${filenames.dto.subdir}.${filenames.requestDto.name};
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

/**
 * ${utils.convertToPhraseAndCapitalize(name)} controller interface.
 */
public interface ${className} {

    /**
     * Finds ${descriptiveName} by id.
     *
     * @param id ${descriptiveName} id
     * @return {@link ${filenames.dto.name}}
     */
    ResponseEntity<${filenames.dto.name}> findById(${entityIdType} id);

    /**
     * Finds all ${descriptiveName}s.
     *
     * @param request pageable request
     * @return {@link Page} with list of {@link ${filenames.dto.name}}
     */
    ResponseEntity<Page<${filenames.dto.name}>> findAll(Pageable request);

    /**
     * Create a new ${descriptiveName}.
     *
     * @param request create ${descriptiveName} request
     * @return created {@link ${filenames.dto.name}}
     */
    ResponseEntity<${filenames.dto.name}> create(${filenames.requestDto.name} request);

    /**
     * Update ${descriptiveName}.
     *
     * @param id ${descriptiveName} id.
     * @param request update ${descriptiveName} request
     * @return updated {@link ${filenames.dto.name}}
     */
    ResponseEntity<${filenames.dto.name}> update(${entityIdType} id, ${filenames.requestDto.name} request);

    /**
     * Deletes ${descriptiveName} by id.
     *
     * @param id ${descriptiveName} id
     * @return empty response
     */
    ResponseEntity deleteById(${entityIdType} id);
}
`};
