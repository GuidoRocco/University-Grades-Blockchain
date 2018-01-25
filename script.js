/**
 * Marks the grade of an exam
 @param {org.acme.model.mark_grade} grade - the grade to be processed 
 @transaction
 */ 


function mark_grade(gd) 
{ 
  gd.student.last_grade = gd.grade_new; 
  gd.student.grades.push(gd.grade_new); 
  gd.grade.student.student_id = gd.student_id; 
  getParticipantRegistry("org.acme.model.Student").then(function (participantRegistry) { 
    return participantRegistry.update(gd.student); } 
                                                      ); 
  return getAssetRegistry("org.acme.model.Grade").then(function (assetRegistry) { 
                                                       return assetRegistry.update(gd.grade); } 
                                                       ); 
 
} 
