const entity = require('../../input/entity');
const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) =>{
    let descriptiveName = utils.convertToPhraseAndCapitalize(name);

return `package ${packageName}.${filenames.service.subdir};

import ${packageName}.exceptions.NotFoundException;
import ${packageName}.${filenames.requestDto.subdir}.${filenames.requestDto.name};
import ${packageName}.${filenames.model.subdir}.${filenames.model.name};
import ${packageName}.${filenames.iRepository.subdir}.${filenames.iRepository.name};
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static ${packageName}.exceptions.Exceptions.${utils.toSnakeCase(name).toUpperCase()}_NOT_FOUND;

/**
 * ${descriptiveName} service implementation.
 */
@Service
public class ${className} implements ${filenames.iService.name} {

    /**
     * ${descriptiveName} repository.
     */
    private final ${filenames.iRepository.name} ${filenames.iRepository.instance};

    @Autowired
    public ${className}(final ${filenames.iService.name} ${filenames.iRepository.instance}) {
        this.${filenames.iRepository.instance} = ${filenames.iRepository.instance};
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public ${filenames.model.name} findById(final ${entityIdType} id) {
        return ${filenames.iRepository.instance}.findById(id).orElseThrow(
                () -> new NotFoundException(${utils.toSnakeCase(name).toUpperCase()}_NOT_FOUND));
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Page<${filenames.model.name}> findAll(final Pageable request) {
        return ${filenames.iRepository.instance}.findAll(request);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public ${filenames.model.name} create(final ${filenames.requestDto.name} request) {

        return ${filenames.iRepository.instance}.save(${filenames.model.name}.builder()
${entity.filter(i => i.name != 'id').map(p =>
`${' '.repeat(16)}.${p.name}(request.get${utils.capitalize(p.name)}())`).join('\n')}
                .build());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public ${filenames.model.name} update(final ${entityIdType} id, final ${filenames.requestDto.name} request) {
        ${filenames.model.name} ${name} = findById(id);

${entity.filter(i => i.name != 'id').map(p =>
     `${' '.repeat(8)}${name}.set${utils.capitalize(p.name)}(request.get${utils.capitalize(p.name)}());`).join('\n')}

        return ${filenames.iRepository.instance}.save(${name});
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void deleteById(final ${entityIdType} id) {
        ${filenames.iRepository.instance}.deleteById(id);
    }
}
`};
