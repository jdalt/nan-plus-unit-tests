#include "gtest/gtest.h"
#include "magicBox.h"

TEST(example, add)
{
    double res;
    MagicBox mb;
    res = mb.smash(5.0, 3);
    ASSERT_NEAR(res, 15.0, 1.0e-11);
}
