'use strict';

/**
 * Perfil.js controller
 *
 * @description: A set of functions called "actions" for managing `Perfil`.
 */

module.exports = {

  /**
   * Retrieve perfil records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.perfil.search(ctx.query);
    } else {
      return strapi.services.perfil.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a perfil record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.perfil.fetch(ctx.params);
  },

  /**
   * Count perfil records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.perfil.count(ctx.query);
  },

  /**
   * Create a/an perfil record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.perfil.add(ctx.request.body);
  },

  /**
   * Update a/an perfil record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.perfil.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an perfil record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.perfil.remove(ctx.params);
  }
};
