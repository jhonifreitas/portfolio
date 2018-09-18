'use strict';

/**
 * Empresa.js controller
 *
 * @description: A set of functions called "actions" for managing `Empresa`.
 */

module.exports = {

  /**
   * Retrieve empresa records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.empresa.search(ctx.query);
    } else {
      return strapi.services.empresa.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a empresa record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.empresa.fetch(ctx.params);
  },

  /**
   * Count empresa records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.empresa.count(ctx.query);
  },

  /**
   * Create a/an empresa record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.empresa.add(ctx.request.body);
  },

  /**
   * Update a/an empresa record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.empresa.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an empresa record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.empresa.remove(ctx.params);
  }
};
