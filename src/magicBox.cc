#include "magicBox.h"

double MagicBox::smash(double target, int times) {
  double result = 0;
  for(int i=0; i<times; i++) {
    result += target;
  }
  return result;
}
