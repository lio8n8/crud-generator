const entity = require('../../input/entity');
const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName}.${filenames.converter.subdir};

import ${packageName}.${filenames.dto.subdir}.${filenames.dto.name};
import ${packageName}.${filenames.model.subdir}.${filenames.model.name};
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Converts ${filenames.model.name} to ${filenames.dto.name}.
 */
@Component
public class ${className} implements Converter<${filenames.model.name}, ${filenames.dto.name}> {

    @Override
    public ${filenames.dto.name} convert(${filenames.model.name} source) {
        return ${filenames.dto.name}.builder()
${entity.filter(i => i.name != 'id').map(p =>
`${' '.repeat(16)}.${p.name}(source.get${utils.capitalize(p.name)}())`).join('\n')}
                .build();
    }
}
`;
