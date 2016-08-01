/**
 * ClassController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ClassController.create()`
   */
  create: function (req, res) {
    Class.create(req.params.all(),function(err,created){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:created});
    });
  },


  /**
   * `ClassController.update()`
   */
  update: function (req, res) {
   Class.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:updated});
   });
  },


  /**
   * `ClassController.destroy()`
   */
  destroy: function (req, res) {
   Class.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:"deleted"});
   });
  },


  /**
   * `ClassController.show()`
   */
  show: function (req, res) {
    Class.findOne(req.param('id'),function(err,found){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:found});
    });
  }
};

