const entity = require('../../input/entity');
const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityIdType}) =>
`package ${packageName}.${filenames.model.subdir};

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import static javax.persistence.GenerationType.AUTO;

/**
 * ${utils.convertToPhraseAndCapitalize(name)} entity.
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "${utils.toSnakeCase(name)}s")
public class ${className} {

    /**
     * ${utils.convertToPhraseAndCapitalize(name)} id.
     */
    @Id
    @GeneratedValue(strategy = AUTO)
    private ${entityIdType} id;    

${entity.filter(i => i.name != 'id').map(p => `\t/**
\t* ${p.name[0].toUpperCase() + p.name.slice(1)}.
\t*/
\tprivate ${p.type} ${p.name};`).join('\n\n')}
}
`;
