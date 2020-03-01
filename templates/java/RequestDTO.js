const entity = require('../../input/entity');
const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName}.${filenames.dto.subdir};

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Contains data for create/update ${utils.convertToPhrase(name)}.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ${className} {

${entity.map(p => `\t/**
\t* ${p.name[0].toUpperCase() + p.name.slice(1)}.
\t*/
\t@ApiModelProperty("${p.name}")
\tprivate ${p.type} ${p.name};`).join('\n\n')}
}
`;
