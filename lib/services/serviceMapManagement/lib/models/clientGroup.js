/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Represents a collection of clients of a resource. A client group can
 * represent the clients of a port, process, or a machine.
 *
 * @extends models['CoreResource']
 */
class ClientGroup extends models['CoreResource'] {
  /**
   * Create a ClientGroup.
   * @member {object} [clientsOf] Reference to the resource whose clients are
   * represented by this group.
   * @member {string} [clientsOf.id] Resource URI.
   * @member {string} [clientsOf.type] Resource type qualifier.
   * @member {string} [clientsOf.name] Resource name.
   * @member {string} [clientsOf.kind] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ClientGroup
   *
   * @returns {object} metadata of ClientGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'clientGroup',
      type: {
        name: 'Composite',
        className: 'ClientGroup',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          clientsOf: {
            required: false,
            serializedName: 'properties.clientsOf',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'kind',
                clientName: 'kind'
              },
              uberParent: 'ResourceReference',
              className: 'ResourceReference'
            }
          }
        }
      }
    };
  }
}

module.exports = ClientGroup;
