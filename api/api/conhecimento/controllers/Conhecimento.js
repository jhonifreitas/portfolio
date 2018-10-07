'use strict';

/**
 * Conhecimento.js controller
 *
 * @description: A set of functions called "actions" for managing `Conhecimento`.
 */

module.exports = {

  /**
   * Retrieve conhecimento records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.conhecimento.search(ctx.query);
    } else {
      return strapi.services.conhecimento.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a conhecimento record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.conhecimento.fetch(ctx.params);
  },

  /**
   * Count conhecimento records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.conhecimento.count(ctx.query);
  },

  /**
   * Create a/an conhecimento record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.conhecimento.add(ctx.request.body);
  },

  /**
   * Update a/an conhecimento record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.conhecimento.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an conhecimento record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.conhecimento.remove(ctx.params);
  }
};
