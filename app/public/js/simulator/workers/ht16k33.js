/*int idle(void);
void wait_idle(void);
void show(uint8_t *buf);
void scroll(char *buf, bool scroll_flag);
void scroll(int val, bool scroll_flag);
void scroll(double val, bool scroll_flag);
void scroll(double val, bool scroll_flag, int precision);*/

// font 6x8
const font_6_8 = [
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x00
	0x00, 0x7c, 0xa2, 0x8a, 0xa2, 0x7c,  // 0x01
	0x00, 0x7c, 0xd6, 0xf6, 0xd6, 0x7c,  // 0x02
	0x00, 0x38, 0x7c, 0x3e, 0x7c, 0x38,  // 0x03
	0x00, 0x18, 0x3c, 0x7e, 0x3c, 0x18,  // 0x04
	0x00, 0x0c, 0x6c, 0xfe, 0x6c, 0x0c,  // 0x05
	0x00, 0x18, 0x3a, 0x7e, 0x3a, 0x18,  // 0x06
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x07
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x08
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x09
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x0a
	0x00, 0x0c, 0x12, 0x52, 0x6c, 0x70,  // 0x0b
	0x00, 0x60, 0x94, 0x9e, 0x94, 0x60,  // 0x0c
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x0d
	0x00, 0x06, 0x7e, 0x50, 0xac, 0xfc,  // 0x0e
	0x00, 0x54, 0x38, 0x6c, 0x38, 0x54,  // 0x0f
	0x00, 0x00, 0xfe, 0x7c, 0x38, 0x10,  // 0x10
	0x00, 0x10, 0x38, 0x7c, 0xfe, 0x00,  // 0x11
	0x00, 0x28, 0x6c, 0xfe, 0x6c, 0x28,  // 0x12
	0x00, 0x00, 0xfa, 0x00, 0xfa, 0x00,  // 0x13
	0x00, 0x60, 0x90, 0xfe, 0x80, 0xfe,  // 0x14
	0x00, 0x44, 0xb2, 0xaa, 0x9a, 0x44,  // 0x15
	0x00, 0x06, 0x06, 0x06, 0x06, 0x00,  // 0x16
	0x00, 0x28, 0x6d, 0xff, 0x6d, 0x28,  // 0x17
	0x00, 0x20, 0x60, 0xfe, 0x60, 0x20,  // 0x18
	0x00, 0x08, 0x0c, 0xfe, 0x0c, 0x08,  // 0x19
	0x00, 0x10, 0x10, 0x7c, 0x38, 0x10,  // 0x1a
	0x00, 0x10, 0x38, 0x7c, 0x10, 0x10,  // 0x1b
	0x00, 0x1e, 0x02, 0x02, 0x02, 0x02,  // 0x1c
	0x00, 0x10, 0x7c, 0x10, 0x7c, 0x10,  // 0x1d
	0x00, 0x0c, 0x3c, 0xfc, 0x3c, 0x0c,  // 0x1e
	0x00, 0xc0, 0xf0, 0xfc, 0xf0, 0xc0,  // 0x1f
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // 0x20
	0x00, 0x00, 0x60, 0xfa, 0x60, 0x00,  // 0x21
	0x00, 0xe0, 0xc0, 0x00, 0xe0, 0xc0,  // 0x22
	0x00, 0x24, 0x7e, 0x24, 0x7e, 0x24,  // 0x23
	0x00, 0x24, 0xd4, 0x56, 0x48, 0x00,  // 0x24
	0x00, 0xc6, 0xc8, 0x10, 0x26, 0xc6,  // 0x25
	0x00, 0x6c, 0x92, 0x6a, 0x04, 0x0a,  // 0x26
	0x00, 0x00, 0xe0, 0xc0, 0x00, 0x00,  // 0x27
	0x00, 0x00, 0x7c, 0x82, 0x00, 0x00,  // 0x28
	0x00, 0x00, 0x82, 0x7c, 0x00, 0x00,  // 0x29
	0x00, 0x10, 0x7c, 0x38, 0x7c, 0x10,  // 0x2a
	0x00, 0x10, 0x10, 0x7c, 0x10, 0x10,  // 0x2b
	0x00, 0x00, 0x07, 0x06, 0x00, 0x00,  // 0x2c
	0x00, 0x10, 0x10, 0x10, 0x10, 0x10,  // 0x2d
	0x00, 0x00, 0x06, 0x06, 0x00, 0x00,  // 0x2e
	0x00, 0x04, 0x08, 0x10, 0x20, 0x40,  // 0x2f
	0x00, 0x7c, 0x8a, 0x92, 0xa2, 0x7c,  // 0x30
	0x00, 0x00, 0x42, 0xfe, 0x02, 0x00,  // 0x31
	0x00, 0x46, 0x8a, 0x92, 0x92, 0x62,  // 0x32
	0x00, 0x44, 0x92, 0x92, 0x92, 0x6c,  // 0x33
	0x00, 0x18, 0x28, 0x48, 0xfe, 0x08,  // 0x34
	0x00, 0xf4, 0x92, 0x92, 0x92, 0x8c,  // 0x35
	0x00, 0x3c, 0x52, 0x92, 0x92, 0x0c,  // 0x36
	0x00, 0x80, 0x8e, 0x90, 0xa0, 0xc0,  // 0x37
	0x00, 0x6c, 0x92, 0x92, 0x92, 0x6c,  // 0x38
	0x00, 0x60, 0x92, 0x92, 0x94, 0x78,  // 0x39
	0x00, 0x00, 0x36, 0x36, 0x00, 0x00,  // 0x3a
	0x00, 0x00, 0x37, 0x36, 0x00, 0x00,  // 0x3b
	0x00, 0x10, 0x28, 0x44, 0x82, 0x00,  // 0x3c
	0x00, 0x24, 0x24, 0x24, 0x24, 0x24,  // 0x3d
	0x00, 0x00, 0x82, 0x44, 0x28, 0x10,  // 0x3e
	0x00, 0x40, 0x80, 0x9a, 0x90, 0x60,  // 0x3f
	0x00, 0x7c, 0x82, 0xba, 0xaa, 0x78,  // 0x40
	0x00, 0x7e, 0x88, 0x88, 0x88, 0x7e,  // 0x41
	0x00, 0xfe, 0x92, 0x92, 0x92, 0x6c,  // 0x42
	0x00, 0x7c, 0x82, 0x82, 0x82, 0x44,  // 0x43
	0x00, 0xfe, 0x82, 0x82, 0x82, 0x7c,  // 0x44
	0x00, 0xfe, 0x92, 0x92, 0x92, 0x82,  // 0x45
	0x00, 0xfe, 0x90, 0x90, 0x90, 0x80,  // 0x46
	0x00, 0x7c, 0x82, 0x92, 0x92, 0x5e,  // 0x47
	0x00, 0xfe, 0x10, 0x10, 0x10, 0xfe,  // 0x48
	0x00, 0x00, 0x82, 0xfe, 0x82, 0x00,  // 0x49
	0x00, 0x0c, 0x02, 0x02, 0x02, 0xfc,  // 0x4a
	0x00, 0xfe, 0x10, 0x28, 0x44, 0x82,  // 0x4b
	0x00, 0xfe, 0x02, 0x02, 0x02, 0x02,  // 0x4c
	0x00, 0xfe, 0x40, 0x20, 0x40, 0xfe,  // 0x4d
	0x00, 0xfe, 0x40, 0x20, 0x10, 0xfe,  // 0x4e
	0x00, 0x7c, 0x82, 0x82, 0x82, 0x7c,  // 0x4f
	0x00, 0xfe, 0x90, 0x90, 0x90, 0x60,  // 0x50
	0x00, 0x7c, 0x82, 0x8a, 0x84, 0x7a,  // 0x51
	0x00, 0xfe, 0x90, 0x90, 0x98, 0x66,  // 0x52
	0x00, 0x64, 0x92, 0x92, 0x92, 0x4c,  // 0x53
	0x00, 0x80, 0x80, 0xfe, 0x80, 0x80,  // 0x54
	0x00, 0xfc, 0x02, 0x02, 0x02, 0xfc,  // 0x55
	0x00, 0xf8, 0x04, 0x02, 0x04, 0xf8,  // 0x56
	0x00, 0xfc, 0x02, 0x3c, 0x02, 0xfc,  // 0x57
	0x00, 0xc6, 0x28, 0x10, 0x28, 0xc6,  // 0x58
	0x00, 0xe0, 0x10, 0x0e, 0x10, 0xe0,  // 0x59
	0x00, 0x8e, 0x92, 0xa2, 0xc2, 0x00,  // 0x5a
	0x00, 0x00, 0xfe, 0x82, 0x82, 0x00,  // 0x5b
	0x00, 0x40, 0x20, 0x10, 0x08, 0x04,  // 0x5c
	0x00, 0x00, 0x82, 0x82, 0xfe, 0x00,  // 0x5d
	0x00, 0x20, 0x40, 0x80, 0x40, 0x20,  // 0x5e
	0x01, 0x01, 0x01, 0x01, 0x01, 0x01,  // 0x5f
	0x00, 0x00, 0xc0, 0xe0, 0x00, 0x00,  // 0x60
	0x00, 0x04, 0x2a, 0x2a, 0x2a, 0x1e,  // 0x61
	0x00, 0xfe, 0x22, 0x22, 0x22, 0x1c,  // 0x62
	0x00, 0x1c, 0x22, 0x22, 0x22, 0x04,  // 0x63 'c' = 0x00, 0x1c, 0x22, 0x22, 0x22, 0x14
	0x00, 0x1c, 0x22, 0x22, 0x22, 0xfe,  // 0x64
	0x00, 0x1c, 0x2a, 0x2a, 0x2a, 0x10,  // 0x65
	0x00, 0x10, 0x7e, 0x90, 0x90, 0x00,  // 0x66
	0x00, 0x18, 0x25, 0x25, 0x25, 0x3e,  // 0x67
	0x00, 0xfe, 0x20, 0x20, 0x1e, 0x00,  // 0x68
	0x00, 0x00, 0x00, 0x5e, 0x02, 0x00,  // 0x69 'i' = 0x00, 0x00, 0x00, 0xbe, 0x02, 0x00
	0x00, 0x02, 0x01, 0x21, 0xbe, 0x00,  // 0x6a
	0x00, 0xfe, 0x08, 0x14, 0x22, 0x00,  // 0x6b
	0x00, 0x00, 0x00, 0xfe, 0x02, 0x00,  // 0x6c
	0x00, 0x3e, 0x20, 0x18, 0x20, 0x1e,  // 0x6d
	0x00, 0x3e, 0x20, 0x20, 0x1e, 0x00,  // 0x6e
	0x00, 0x1c, 0x22, 0x22, 0x22, 0x1c,  // 0x6f
	0x00, 0x3f, 0x22, 0x22, 0x22, 0x1c,  // 0x70
	0x00, 0x1c, 0x22, 0x22, 0x22, 0x3f,  // 0x71
	0x00, 0x22, 0x1e, 0x22, 0x20, 0x10,  // 0x72
	0x00, 0x10, 0x2a, 0x2a, 0x2a, 0x04,  // 0x73
	0x00, 0x20, 0x7c, 0x22, 0x24, 0x00,  // 0x74
	0x00, 0x3c, 0x02, 0x04, 0x3e, 0x00,  // 0x75
	0x00, 0x38, 0x04, 0x02, 0x04, 0x38,  // 0x76
	0x00, 0x3c, 0x06, 0x0c, 0x06, 0x3c,  // 0x77
	0x00, 0x36, 0x08, 0x08, 0x36, 0x00,  // 0x78
	0x00, 0x39, 0x05, 0x06, 0x3c, 0x00,  // 0x79
	0x00, 0x26, 0x2a, 0x2a, 0x32, 0x00,  // 0x7a
	0x00, 0x10, 0x7c, 0x82, 0x82, 0x00,  // 0x7b
	0x00, 0x00, 0x00, 0xee, 0x00, 0x00,  // 0x7c
	0x00, 0x00, 0x82, 0x82, 0x7c, 0x10,  // 0x7d
	0x00, 0x40, 0x80, 0x40, 0x80, 0x00,  // 0x7e
	0x00, 0x3c, 0x64, 0xc4, 0x64, 0x3c,  // 0x7f
	0x00, 0x78, 0x85, 0x87, 0x84, 0x48,  // 0x80
	0x00, 0xbc, 0x02, 0x04, 0xbe, 0x00,  // 0x81
	0x00, 0x1c, 0x2a, 0x2a, 0xaa, 0x90,  // 0x82
	0x00, 0x04, 0xaa, 0xaa, 0xaa, 0x1e,  // 0x83
	0x00, 0x04, 0xaa, 0x2a, 0xaa, 0x1e,  // 0x84
	0x00, 0x04, 0xaa, 0xaa, 0x2a, 0x1e,  // 0x85
	0x00, 0x04, 0xea, 0xaa, 0xea, 0x1e,  // 0x86
	0x00, 0x38, 0x45, 0x47, 0x44, 0x28,  // 0x87
	0x00, 0x1c, 0xaa, 0xaa, 0xaa, 0x10,  // 0x88
	0x00, 0x1c, 0xaa, 0x2a, 0xaa, 0x10,  // 0x89
	0x00, 0x1c, 0xaa, 0xaa, 0x2a, 0x10,  // 0x8a
	0x00, 0x00, 0x80, 0x3e, 0x82, 0x00,  // 0x8b
	0x00, 0x00, 0x80, 0xbe, 0x82, 0x00,  // 0x8c
	0x00, 0x00, 0x80, 0x3e, 0x02, 0x00,  // 0x8d
	0x00, 0x0e, 0x94, 0x24, 0x94, 0x0e,  // 0x8e
	0x00, 0x1e, 0xf4, 0xa4, 0xf4, 0x1e,  // 0x8f
	0x00, 0x3e, 0x2a, 0x2a, 0xaa, 0xa2,  // 0x90
	0x00, 0x2c, 0x2a, 0x3e, 0x2a, 0x1a,  // 0x91
	0x00, 0x7e, 0x90, 0xfe, 0x92, 0x92,  // 0x92
	0x00, 0x1c, 0xa2, 0xa2, 0x9c, 0x00,  // 0x93
	0x00, 0x1c, 0xa2, 0x22, 0x9c, 0x00,  // 0x94
	0x00, 0x9c, 0xa2, 0x22, 0x1c, 0x00,  // 0x95
	0x00, 0x3c, 0x82, 0x84, 0xbe, 0x00,  // 0x96
	0x00, 0xbc, 0x82, 0x04, 0x3e, 0x00,  // 0x97
	0x00, 0x39, 0x85, 0x06, 0xbc, 0x00,  // 0x98
	0x00, 0xbc, 0x42, 0x42, 0xbc, 0x00,  // 0x99
	0x00, 0x3c, 0x82, 0x02, 0xbc, 0x00,  // 0x9a
	0x01, 0x0e, 0x16, 0x1a, 0x1c, 0x20,  // 0x9b
	0x00, 0x12, 0x7c, 0x92, 0x92, 0x46,  // 0x9c
	0x00, 0x7e, 0x86, 0xba, 0xc2, 0xfc,  // 0x9d
	0x00, 0x44, 0x28, 0x10, 0x28, 0x44,  // 0x9e
	0x00, 0x02, 0x11, 0x7e, 0x90, 0x40,  // 0x9f
	0x00, 0x04, 0x2a, 0xaa, 0xaa, 0x1e,  // 0xa0
	0x00, 0x00, 0x00, 0xbe, 0x82, 0x00,  // 0xa1
	0x00, 0x1c, 0x22, 0xa2, 0x9c, 0x00,  // 0xa2
	0x00, 0x3c, 0x02, 0x84, 0xbe, 0x00,  // 0xa3
	0x00, 0x5e, 0x90, 0x50, 0x8e, 0x00,  // 0xa4
	0x00, 0x5e, 0x88, 0x44, 0x9e, 0x00,  // 0xa5
	0x00, 0x10, 0xaa, 0xaa, 0xaa, 0x7a,  // 0xa6
	0x00, 0x72, 0x8a, 0x8a, 0x72, 0x00,  // 0xa7
	0x00, 0x0c, 0x12, 0xb2, 0x02, 0x04,  // 0xa8
	0x7c, 0x82, 0xba, 0xd2, 0xaa, 0x7c,  // 0xa9
	0x20, 0x20, 0x20, 0x20, 0x20, 0x38,  // 0xaa
	0x00, 0xe8, 0x10, 0x32, 0x56, 0x0a,  // 0xab
	0x00, 0xe8, 0x10, 0x2c, 0x54, 0x1e,  // 0xac
	0x00, 0x00, 0x0c, 0xbe, 0x0c, 0x00,  // 0xad
	0x00, 0x10, 0x28, 0x00, 0x10, 0x28,  // 0xae
	0x00, 0x28, 0x10, 0x00, 0x28, 0x10,  // 0xaf
	0x22, 0x88, 0x22, 0x88, 0x22, 0x88,  // 0xb0
	0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa,  // 0xb1
	0xdd, 0x77, 0xdd, 0x77, 0xdd, 0x77,  // 0xb2
	0x00, 0x00, 0x00, 0xff, 0x00, 0x00,  // 0xb3
	0x10, 0x10, 0x10, 0xff, 0x00, 0x00,  // 0xb4
	0x00, 0x0e, 0x14, 0xa4, 0x94, 0x0e,  // 0xb5
	0x00, 0x0e, 0x94, 0xa4, 0x94, 0x0e,  // 0xb6
	0x00, 0x0e, 0x94, 0xa4, 0x14, 0x0e,  // 0xb7
	0x7c, 0x82, 0xba, 0xaa, 0x82, 0x7c,  // 0xb8
	0x50, 0xdf, 0x00, 0xff, 0x00, 0x00,  // 0xb9
	0x00, 0xff, 0x00, 0xff, 0x00, 0x00,  // 0xba
	0x50, 0x5f, 0x40, 0x7f, 0x00, 0x00,  // 0xbb
	0x50, 0xd0, 0x10, 0xf0, 0x00, 0x00,  // 0xbc
	0x00, 0x18, 0x24, 0x66, 0x24, 0x00,  // 0xbd
	0x00, 0x94, 0x54, 0x3e, 0x54, 0x94,  // 0xbe
	0x10, 0x10, 0x10, 0x1f, 0x00, 0x00,  // 0xbf
	0x00, 0x00, 0x00, 0xf0, 0x10, 0x10,  // 0xc0
	0x10, 0x10, 0x10, 0xf0, 0x10, 0x10,  // 0xc1
	0x10, 0x10, 0x10, 0x1f, 0x10, 0x10,  // 0xc2
	0x00, 0x00, 0x00, 0xff, 0x10, 0x10,  // 0xc3
	0x10, 0x10, 0x10, 0x10, 0x10, 0x10,  // 0xc4
	0x10, 0x10, 0x10, 0xff, 0x10, 0x10,  // 0xc5
	0x00, 0x04, 0x6a, 0xaa, 0x6a, 0x9e,  // 0xc6
	0x00, 0x0e, 0x54, 0xa4, 0x54, 0x8e,  // 0xc7
	0x00, 0xf0, 0x10, 0xd0, 0x50, 0x50,  // 0xc8
	0x00, 0x7f, 0x40, 0x5f, 0x50, 0x50,  // 0xc9
	0x50, 0xd0, 0x10, 0xd0, 0x50, 0x50,  // 0xca
	0x50, 0x5f, 0x40, 0x5f, 0x50, 0x50,  // 0xcb
	0x00, 0xff, 0x00, 0xdf, 0x50, 0x50,  // 0xcc
	0x50, 0x50, 0x50, 0x50, 0x50, 0x50,  // 0xcd
	0x50, 0xdf, 0x00, 0xdf, 0x50, 0x50,  // 0xce
	0x00, 0xba, 0x44, 0x44, 0x44, 0xba,  // 0xcf
	0x00, 0x44, 0xaa, 0x9a, 0x0c, 0x00,  // 0xd0
	0x00, 0x10, 0xfe, 0x92, 0x82, 0x7c,  // 0xd1
	0x00, 0x3e, 0xaa, 0xaa, 0xaa, 0x22,  // 0xd2
	0x00, 0x3e, 0xaa, 0x2a, 0xaa, 0x22,  // 0xd3
	0x00, 0x3e, 0xaa, 0xaa, 0x2a, 0x22,  // 0xd4
	0x00, 0x00, 0x00, 0xe0, 0x00, 0x00,  // 0xd5
	0x00, 0x00, 0x22, 0xbe, 0xa2, 0x00,  // 0xd6
	0x00, 0x00, 0xa2, 0xbe, 0xa2, 0x00,  // 0xd7
	0x00, 0x00, 0xa2, 0x3e, 0xa2, 0x00,  // 0xd8
	0x10, 0x10, 0x10, 0xf0, 0x00, 0x00,  // 0xd9
	0x00, 0x00, 0x00, 0x1f, 0x10, 0x10,  // 0xda
	0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  // 0xdb
	0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f,  // 0xdc
	0x00, 0x00, 0x00, 0xee, 0x00, 0x00,  // 0xdd
	0x00, 0x00, 0xa2, 0xbe, 0x22, 0x00,  // 0xde
	0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0,  // 0xdf
	0x00, 0x3c, 0x42, 0xc2, 0xbc, 0x00,  // 0xe0
	0x00, 0x7f, 0x52, 0x52, 0x2c, 0x00,  // 0xe1
	0x00, 0x3c, 0xc2, 0xc2, 0xbc, 0x00,  // 0xe2
	0x00, 0xbc, 0xc2, 0x42, 0x3c, 0x00,  // 0xe3
	0x00, 0x4c, 0x92, 0x52, 0x8c, 0x00,  // 0xe4
	0x00, 0x5c, 0xa2, 0x62, 0x9c, 0x00,  // 0xe5
	0x00, 0x3f, 0x04, 0x04, 0x38, 0x00,  // 0xe6
	0x00, 0x7f, 0x55, 0x14, 0x08, 0x00,  // 0xe7
	0x00, 0xff, 0xa5, 0x24, 0x18, 0x00,  // 0xe8
	0x00, 0x3c, 0x02, 0x82, 0xbc, 0x00,  // 0xe9
	0x00, 0x3c, 0x82, 0x82, 0xbc, 0x00,  // 0xea
	0x00, 0xbc, 0x82, 0x02, 0x3c, 0x00,  // 0xeb
	0x00, 0x39, 0x05, 0x86, 0xbc, 0x00,  // 0xec
	0x00, 0x20, 0x10, 0x8e, 0x90, 0x20,  // 0xed
	0x00, 0x00, 0x40, 0x40, 0x40, 0x00,  // 0xee
	0x00, 0x00, 0xe0, 0xc0, 0x00, 0x00,  // 0xef
	0x00, 0x00, 0x10, 0x10, 0x10, 0x00,  // 0xf0
	0x00, 0x00, 0x24, 0x74, 0x24, 0x00,  // 0xf1
	0x00, 0x24, 0x24, 0x24, 0x24, 0x24,  // 0xf2
	0xa0, 0xe8, 0x50, 0x2c, 0x54, 0x1e,  // 0xf3
	0x00, 0x60, 0x90, 0xfe, 0x80, 0xfe,  // 0xf4
	0x00, 0x44, 0xb2, 0xaa, 0x9a, 0x44,  // 0xf5
	0x00, 0x10, 0x10, 0x54, 0x10, 0x10,  // 0xf6
	0x00, 0x00, 0x10, 0x18, 0x18, 0x00,  // 0xf7
	0x00, 0x60, 0x90, 0x90, 0x60, 0x00,  // 0xf8
	0x00, 0x00, 0x10, 0x00, 0x10, 0x00,  // 0xf9
	0x00, 0x00, 0x10, 0x00, 0x00, 0x00,  // 0xfa
	0x00, 0x40, 0xf0, 0x00, 0x00, 0x00,  // 0xfb
	0x00, 0x90, 0xf0, 0xa0, 0x00, 0x00,  // 0xfc
	0x00, 0x90, 0xb0, 0x50, 0x00, 0x00,  // 0xfd
	0x00, 0x3c, 0x3c, 0x3c, 0x3c, 0x00,  // 0xfe
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00  // 0xff
];

const LED16x8_MAX_CHARS				= 2;
const HT16K33_SHOW_FLAG				= 0x01;
const HT16K33_SCROLLING_INIT_FLAG	= 0x02;
const HT16K33_SCROLLING_FLAG		= 0x04;
const HT16K33_SCROLLING_SHOW_FLAG	= 0x08;
const HT16K33_2CHARS_FLAG			= 0x10;
const HT16K33_BUSY_FLAG				= 0x20;

const s_ht16k33 = {
	show: 0,
	scrolling_init: 1,
	scrolling: 2,
	idle: 3
};

var buffer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var temp_buffer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var state = s_ht16k33.idle;
var scrolling_string = '';
var curr_char_index = null;
var start_strip_index = null;
var display_width = null;
var font_width = null;
var curr_heading_width = null;
var cmd_index = null;
var clr_flag = 0;
var set_flag = 0;
var flag = 0;

function update_state(val) {
	state = val;
	postMessage({
		type: 'state_changed',
		state: val
	});
}

function update_flag(val) {
	var old_flag = flag;
	flag = val;

	if ((old_flag & HT16K33_BUSY_FLAG) != (flag & HT16K33_BUSY_FLAG)) {
		var busy = ((flag & HT16K33_BUSY_FLAG) != 0);
		postMessage({
			type: 'busy_changed',
			busy: busy
		});
	}
}

function init() {
	update_state(s_ht16k33.idle);
	flag = 0;
	postMessage({
		type: 'busy_changed',
		busy: false
	});
}

function show(buf) {
	if (buf.length != 16) {
		return;
	}
	for (var x = 0; x < 16; x++) {
		temp_buffer[x] = parseInt(buf.charCodeAt(x));
	}
	clr_flag = 0x80 | HT16K33_SCROLLING_INIT_FLAG | HT16K33_SCROLLING_FLAG | HT16K33_2CHARS_FLAG | HT16K33_SCROLLING_SHOW_FLAG;
	set_flag = 0x80 | HT16K33_SHOW_FLAG;
	update_flag(flag | HT16K33_BUSY_FLAG);
}

function scroll(buf, scroll_flag) {
	// check scroll flag
	if (scroll_flag) {
		scrolling_temp_string = buf.toString();
		clr_flag = 0x80 | HT16K33_SHOW_FLAG | HT16K33_SCROLLING_FLAG | HT16K33_2CHARS_FLAG;
		set_flag = 0x80 | HT16K33_SCROLLING_INIT_FLAG;
	}
	else {
		scrolling_temp_string = buf.toString();
		if (scrolling_temp_string > 2) {
			scrolling_temp_string = scrolling_temp_string.substring(0, LED16x8_MAX_CHARS);
		}
		// check right justify
		if (scrolling_temp_string.length == 1) {
			scrolling_temp_string = ' ' + scrolling_temp_string;
		}
		clr_flag = 0x80 | HT16K33_SHOW_FLAG | HT16K33_SCROLLING_FLAG;
		set_flag = 0x80 | HT16K33_SCROLLING_INIT_FLAG | HT16K33_2CHARS_FLAG;
	}

	update_flag(flag | HT16K33_BUSY_FLAG);
}

function proc() {
	switch (state) {
		case s_ht16k33.show:
			for (var x = 0; x < 16; x++) {
				var val = parseInt(buffer[x]);
				for (var y = 0; y < 8; y++) {
					var f = '#646464';
					var s = '#404040';
					if ((val & 0x01) != 0) {
						f = '#ff2020';
						s = '#ff0000';
					}
					val = val >> 1;
					// post render message
					postMessage({
						type: 'render',
						x: x,
						y: y,
						f: f,
						s: s
					});
				}
			}
			update_state(s_ht16k33.idle);
			break;

		case s_ht16k33.scrolling_init:
			// init scrolling params
			curr_char_index = 0;
			start_strip_index = 0;
			display_width = 16; // 16x8
			font_width = 6; // 6x8

			// check if show 2 chars
			if (flag & HT16K33_2CHARS_FLAG) {
				curr_heading_width = 4;
			} else {
				curr_heading_width = display_width;
			}
			update_state(s_ht16k33.scrolling);
			break;

		case s_ht16k33.scrolling:
			// playing with heading
			if (curr_heading_width > 0) {
				for (i = 0; i < curr_heading_width; i++) {
					buffer[i] = 0x00;
				}
				// left strip pass to default scrolling process
				strip_cnt = curr_heading_width;
			} else {
				// otherwise
				strip_cnt = 0;
			}

			// start from current char and at current strip position
			var tmp_curr_char_index = curr_char_index;
			ch_ptr = scrolling_string.charAt(tmp_curr_char_index);

			// check end of string
			if (ch_ptr != '') {
				strip_index = start_strip_index;

				// draw strip up to display width
				while ((strip_cnt < display_width) && (ch_ptr != '')) {
					for (i = strip_index; i < font_width; i++) {
						buffer[strip_cnt] = font_6_8[(ch_ptr.charCodeAt(0) * 6) + i] & 0xff;
						strip_cnt++;
						if (!(strip_cnt < display_width)) {
							break;
						}
					}
					//ch_ptr++;
					tmp_curr_char_index++;
					ch_ptr = scrolling_string.charAt(tmp_curr_char_index);

					strip_index = 0;
				}

				// clear tail area
				for (i = strip_cnt; i < display_width; i++) {
					buffer[i] = 0x00;
				}

				// if just playing with heading
				if (curr_heading_width > 0) {
					curr_heading_width--;
				} else {
					start_strip_index++;
					if (start_strip_index >= font_width) {
						start_strip_index = 0;
						curr_char_index++;
					}
				}

				// check if show 2 chars
				if (flag & HT16K33_2CHARS_FLAG) {
					update_flag(flag & ~HT16K33_2CHARS_FLAG);
					// set show once
					update_flag(flag | HT16K33_SCROLLING_SHOW_FLAG);
				} else {
					// set show and then scrolling flag
					update_flag(flag | (HT16K33_SCROLLING_SHOW_FLAG | HT16K33_SCROLLING_FLAG));
				}
			} else {
				// clear last strip
				for (i = 0; i < display_width; i++) {
					buffer[i] = 0x00;
				}
				// set only show flag
				update_flag(flag | HT16K33_SCROLLING_SHOW_FLAG);
			}

			update_state(s_ht16k33.idle);
			break;

		case s_ht16k33.idle:
			// check set/clr flag
			if (clr_flag & 0x7f) {
				update_flag(flag & ~clr_flag);
				clr_flag = 0;
			}
			if (set_flag & 0x7f) {
				update_flag(flag | set_flag);
				set_flag = 0;
			}
			update_flag(flag & ~0x80);

			// check pending flag
			if (flag & HT16K33_SHOW_FLAG) {
				buffer = temp_buffer;
				update_flag(flag & ~HT16K33_SHOW_FLAG);
				update_state(s_ht16k33.show);
			} else
			if (flag & HT16K33_SCROLLING_SHOW_FLAG) {
				update_flag(flag & ~HT16K33_SCROLLING_SHOW_FLAG);
				update_state(s_ht16k33.show);
			} else
			if (flag & HT16K33_SCROLLING_INIT_FLAG) {
				scrolling_string = scrolling_temp_string;
				update_flag(flag & ~HT16K33_SCROLLING_INIT_FLAG);
				update_state(s_ht16k33.scrolling_init);
			} else
			if (flag & HT16K33_SCROLLING_FLAG) {
				update_flag(flag & ~HT16K33_SCROLLING_FLAG);
				update_state(s_ht16k33.scrolling);
			} else
			if (flag & HT16K33_BUSY_FLAG) {
				update_flag(flag & ~HT16K33_BUSY_FLAG);
			}
			break;
	}
}

onmessage = function(e) {
	var msg = e.data;

	switch (msg.type) {
		case 'init':
			init();
			break;

		case 'show':
			show(msg.buf);
			break;

		case 'scroll':
			scroll(msg.buf, msg.scroll_flag);
			break;
	}
}

proc();
setInterval(function () {
	proc();
}, 20);
