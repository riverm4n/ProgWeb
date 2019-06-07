/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function(req, res){},
  create: async function(req, res){},
  read: async function(req, res){
    res.end(req.parm("cursoId"));
  },
  update: async function(req, res){},
  delete: async function(req, res){},
};
