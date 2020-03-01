const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) => {
    let descriptiveName = utils.convertToPhrase(name);

return `
package ${packageName}.${filenames.iService.subdir};

import ${packageName}.${filenames.requestDto.subdir}.${filenames.requestDto.name};
import ${packageName}.${filenames.model.subdir}.${filenames.model.name};
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * ${utils.convertToPhraseAndCapitalize(name)} service interface.
 */
public interface ${className} {

    /**
     * Finds ${descriptiveName} by id.
     *
     * @param id ${descriptiveName} id
     * @return {@link ${filenames.model.name}}
     */
    ${filenames.model.name} findById(${entityIdType} id);

    /**
     * Finds all ${descriptiveName}s.
     *
     * @param request pageable request
     * @return page with list of {@link ${filenames.model.name}}
     */
    Page<${filenames.model.name}> findAll(Pageable request);

    /**
     * Creates a new ${descriptiveName}.
     *
     * @param request create ${descriptiveName} request
     * @return created {@link${filenames.model.name}}
     */
    ${filenames.model.name} create(${filenames.requestDto.name} request);

    /**
     * Updates ${descriptiveName}.
     *
     * @param id ${descriptiveName} id
     * @param request update ${descriptiveName} request
     * @return updated {@link ${filenames.model.name}}
     */
    ${filenames.model.name} update(${entityIdType} id, ${filenames.requestDto.name} request);

    /**
     * Deletes ${descriptiveName} by id.
     *
     * @param id ${descriptiveName} id
     */
    void deleteById(${entityIdType} id);
}
`};
