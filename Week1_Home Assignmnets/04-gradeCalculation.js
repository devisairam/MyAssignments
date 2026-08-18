function gradeCalculator(score)
{   
  switch(true)
  {
    case (score > 90) :
        console.log('Grade A')
        break
    case (score > 70 && score < 90) :
        console.log('Grade B');
        break
    case (score > 50 && score < 70) :
        console.log('Grade C');
        break
    case (score > 30 && score < 50) :
        console.log('Grade D');
        break
    default:
        console.log('Student grade not recorded');        
  }
}

gradeCalculator(95)