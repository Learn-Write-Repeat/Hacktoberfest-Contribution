#include <cmath>
#include "Vec3.cpp"

template<typename T>
class Matrix44
{
public :
    Matrix44() {}

    T* operator [](uint8_t i)
    { return m[i]; }
    T* operator [](uint8_t i)
    { return m[i]; }

    Matrix44 operator *(const Matrix44& rhs) const
    {
        Matrix44 mult;
        for(uint8_t i = 0; i < 4; i++)
        {
            for(uint8_t j = 0; j < 4; j++)
            {
                mult[i][j] = m[i][0]*rhs[0][j] + 
                             m[i][1]*rhs[1][j] + 
                             m[i][2]*rhs[2][j] + 
                             m[i][3]*rhs[3][j];
            }
        }
        return mult;
    }

    //POINT[1X3] X MATRIX[4X4] WITHOUT HOMOGENOUS VARIABLE W
    template<typename S> 
    void multVecMatrix(const Vec3<S> &src, Vec3<S> &dst) const 
    { 
        dst.x = src.x * m[0][0] + src.y * m[1][0] + src.z * m[2][0] + m[3][0]; 
        dst.y = src.x * m[0][1] + src.y * m[1][1] + src.z * m[2][1] + m[3][1]; 
        dst.z = src.x * m[0][2] + src.y * m[1][2] + src.z * m[2][2] + m[3][2]; 
        T w = src.x * m[0][3] + src.y * m[1][3] + src.z * m[2][3] + m[3][3]; 

        if (w != 1 && w != 0) 
        { 
            dst.x = x / w; 
            dst.y = y / w; 
            dst.z = z / w; 
        } 
    } 

    //VECTOR[1X3] X MATRIX[4X4] WITHOUT HOMOGENOUS VARIABLE W
    template<typename S>
    void multDirMatrix(const Vec3<S> &src, Vec3<S> &dst) const 
    { 
        dst.x = src.x * m[0][0] + src.y * m[1][0] + src.z * m[2][0]; 
        dst.y = src.x * m[0][1] + src.y * m[1][1] + src.z * m[2][1]; 
        dst.z = src.x * m[0][2] + src.y * m[1][2] + src.z * m[2][2]; 
    } 

    Matrix44 transpose()
    {
        Matrix44 trans;
        for(int i = 0; i < 4; i++)
        {
            for(int j = 0; j < 4; j++)
            {
                trans[i][j] = m[j][i];
            }
        }
        return trans;
    }

    Matrix44 inverse() 
    { 
        int i, j, k; 
        Matrix44 inv; 
        Matrix44 t (*this); 
 
        // Forward elimination
        for (i = 0; i < 3 ; i++) { 
            int pivot = i; 
 
            T pivotsize = t[i][i]; 
 
            if (pivotsize < 0) 
                pivotsize = -pivotsize; 
 
                for (j = i + 1; j < 4; j++) { 
                    T tmp = t[j][i]; 
 
                    if (tmp < 0) 
                        tmp = -tmp; 
 
                        if (tmp > pivotsize) { 
                            pivot = j; 
                            pivotsize = tmp; 
                        } 
                } 
 
            if (pivotsize == 0) { 
                // Cannot invert singular matrix
                return Matrix44(); 
            } 
 
            if (pivot != i) { 
                for (j = 0; j < 4; j++) { 
                    T tmp; 
 
                    tmp = t[i][j]; 
                    t[i][j] = t[pivot][j]; 
                    t[pivot][j] = tmp; 
 
                    tmp = inv[i][j]; 
                    inv[i][j] = inv[pivot][j]; 
                    inv[pivot][j] = tmp; 
                } 
            } 
 
            for (j = i + 1; j < 4; j++) { 
                T f = t[j][i] / t[i][i]; 
 
                for (k = 0; k < 4; k++) { 
                    t[j][k] -= f * t[i][k]; 
                    inv[j][k] -= f * inv[i][k]; 
                } 
            } 
        } 
 
        // Backward substitution
        for (i = 3; i >= 0; --i) { 
            T f; 
 
            if ((f = t[i][i]) == 0) { 
                // Cannot invert singular matrix
                return Matrix44(); 
            } 
 
            for (j = 0; j < 4; j++) { 
                t[i][j] /= f; 
                inv[i][j] /= f; 
            } 
 
            for (j = 0; j < i; j++) { 
                f = t[j][i]; 
 
                for (k = 0; k < 4; k++) { 
                    t[j][k] -= f * t[i][k]; 
                    inv[j][k] -= f * inv[i][k]; 
                } 
            } 
        } 
 
        return inv; 
    }

    T determinant()
    {
        T det;
        return det;
    }

    T m[4][4] = {
        {1,0,0,0},
        {0,1,0,0},
        {0,0,1,0},
        {0,0,0,1}
    };
};

/*
GENERIC MATRIX MULTIPLICATION
for(uint8_t i = 0; i < 4; i++)
{
    for(uint8_t j = 0; j < 4; j++)
    {
        for(uint8_t k = 0; k < 4; k++)
        {
            mult[i][j] += m[i][k]*rhs[k][j];
        }
    }
}
*/

Matrix44<float> lookAt(const Vec3<float>& from, const Vec3<float>& to, Vec3<float>& tmp = Vec3<float>(0, 1, 0))
{
    Vec3<float> forward = (from - to).normalize();
    Vec3<float> right = (tmp.normalize()).cross(forward);
    Vec3<float> up = forward.cross(right);

    Matrix44<float> camToWorld;

    camToWorld[0][0] = right.x; 
    camToWorld[0][1] = right.y; 
    camToWorld[0][2] = right.z; 
    camToWorld[1][0] = up.x; 
    camToWorld[1][1] = up.y; 
    camToWorld[1][2] = up.z; 
    camToWorld[2][0] = forward.x; 
    camToWorld[2][1] = forward.y; 
    camToWorld[2][2] = forward.z; 
 
    camToWorld[3][0] = from.x; 
    camToWorld[3][1] = from.y; 
    camToWorld[3][2] = from.z; 
 
    return camToWorld;
}
