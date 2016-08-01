/**
 * PupilController
 *
 * @description :: Server-side logic for managing pupils
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PupilController.create()`
   */
  create: function (req, res) {
    Pupil.create(req.params.all(),function(err,created){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:created});
    });
  },


  /**
   * `PupilController.update()`
   */
  update: function (req, res) {
   Pupil.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:updated});
   });
  },


  /**
   * `PupilController.destroy()`
   */
  destroy: function (req, res) {
    Pupil.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json({value:"deleted"});
   });
  },


  /**
   * `PupilController.show()`
   */
  show: function (req, res) {
     Pupil.findOne(req.param('id'),function(err,found){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:found});
    });
   }
};

