'use strict';

/**
 * Redesocial.js controller
 *
 * @description: A set of functions called "actions" for managing `Redesocial`.
 */

module.exports = {

  /**
   * Retrieve redesocial records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.redesocial.search(ctx.query);
    } else {
      return strapi.services.redesocial.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a redesocial record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.redesocial.fetch(ctx.params);
  },

  /**
   * Count redesocial records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.redesocial.count(ctx.query);
  },

  /**
   * Create a/an redesocial record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.redesocial.add(ctx.request.body);
  },

  /**
   * Update a/an redesocial record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.redesocial.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an redesocial record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.redesocial.remove(ctx.params);
  }
};
