'use strict';

/**
 * Projeto.js controller
 *
 * @description: A set of functions called "actions" for managing `Projeto`.
 */

module.exports = {

  /**
   * Retrieve projeto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.projeto.search(ctx.query);
    } else {
      return strapi.services.projeto.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a projeto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.projeto.fetch(ctx.params);
  },

  /**
   * Count projeto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.projeto.count(ctx.query);
  },

  /**
   * Create a/an projeto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.projeto.add(ctx.request.body);
  },

  /**
   * Update a/an projeto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.projeto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an projeto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.projeto.remove(ctx.params);
  }
};
