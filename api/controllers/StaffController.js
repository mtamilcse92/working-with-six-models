/**
 * StaffController
 *
 * @description :: Server-side logic for managing staff
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `StaffController.create()`
   */
  create: function (req, res) {
   Staff.create(req.params.all(),function(err,created){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:created});
    });
  },


  /**
   * `StaffController.update()`
   */
  update: function (req, res) {
     Staff.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:updated});
   });
  },


  /**
   * `StaffController.destroy()`
   */
  destroy: function (req, res) {
    Staff.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:"deleted"});
   });
  },


  /**
   * `StaffController.show()`
   */
  show: function (req, res) {
     Staff.findOne(req.param('id'),function(err,found){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:found});
    });
  }
};

