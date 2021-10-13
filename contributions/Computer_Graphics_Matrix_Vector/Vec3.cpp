#include <iostream>
#include <cmath>

using namespace std;

template<typename T>
class Vec3
{
public :
    Vec3() : x(T(0)), y(T(0)), z(T(0)) {}
    Vec3(const T& xx) : x(xx), y(xx), z(xx) {}
    Vec3(T xx, T yy, T zz) : x(xx), y(yy), z(zz) {}

    //RETURNS ||V|| OR NORM/MAGNITUDE
    T length()
    {
        return sqrt(x*x + y*y + z*z);
    }

    //RETURNS NORMALIZED V OR V UNIT VECTOR
    Vec3<T> normalize()
    {
        T len2 = dot(*this);
        if(len2 > 0)
        {
            T invLen = 1/sqrt(len2);
            x *= invLen;
            y *= invLen;
            z *= invLen;
        }

        return *this;
    }

    //RETURNS A.B OR DOT PRODUCT OF TWO VECTORS
    T dot(const Vec3<T>& v) const
    {
        return (x*v.x + y*v.y + z*v.z);
    }

    //RETURNS AXB OR CROSS PRODUCT OF TWO VECTORS
    Vec3<T> cross(const Vec3<T>& v) const
    {
        return Vec3<T>(
            y*v.z - z*v.y,// Cx
            z*v.x - x*v.z,// Cy
            x*v.y - y*v.x// Cz
        );
    }

    Vec3<T> operator + (const Vec3<T>& v) const
    { return Vec3<T>(x+v.x, y+v.y, z+v.z); }
    Vec3<T> operator - (const Vec3<T>& v) const
    { return Vec3<T>(x-v.x, y-v.y, z-v.z); }
    Vec3<T> operator * (const T& r) const
    { return Vec3<T>(x*r, y*r, z*r); }

    void debugPrint()
    {
        cout << "( " << x << ", " << y << ", " << z << " )" << endl;
    }

    T x, y, z;
};
