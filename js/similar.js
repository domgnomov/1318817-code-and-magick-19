'use strict';
(function () {
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var getSortedSimilarWizards = function (wizards) {
    coatColor = window.wizardSettings.getWizardCoatColor();
    eyesColor = window.wizardSettings.getWizardEyesColor();
    var sortedWizardList = wizards.slice();
    return sortedWizardList.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = sortedWizardList.indexOf(left) - sortedWizardList.indexOf(right);
      }
      return rankDiff;
    });
  };

  window.similar = {
    getSortedSimilarWizards: getSortedSimilarWizards
  };

})();
