const entity = require('../../input/entity');

module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName};

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Contains ${name} data.
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
\tprivate ${p.type} ${p.name};`).join('\n\n')}
}
`;
