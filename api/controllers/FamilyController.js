/**
 * FamilyController
 *
 * @description :: Server-side logic for managing families
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FamilyController.create()`
   */
  create: function (req, res) {
   Family.create(req.params.all(),function(err,created){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:created});
    });
  },


  /**
   * `FamilyController.update()`
   */
  update: function (req, res) {
   Family.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:updated});
   });
  },


  /**
   * `FamilyController.destroy()`
   */
  destroy: function (req, res) {
    Family.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:"deleted"});
   });
  },


  /**
   * `FamilyController.show()`
   */
  show: function (req, res) {
   Family.findOne(req.param('id'),function(err,found){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:found});
    });
  }
};

